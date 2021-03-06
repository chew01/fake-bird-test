import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ComposeImage from '../../assets/buttons/composeimage.svg';
import { createNewTweet, getUserData } from '../../api/database';
import { AuthContext } from '../../api/auth';
import { uploadImageAndReturnLink } from '../../api/storage';

const ComposeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  padding-bottom: 4px;
`;

const ComposeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  box-sizing: border-box;
  padding: 4px 16px;
`;

const ComposerIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  flex: 0 0 48px;
  margin-right: 12px;
  padding-top: 4px;
`;

const ComposerIcon = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 9999px;
`;

const Composer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0px;
  align-items: stretch;
  box-sizing: border-box;
  justify-content: center;
  padding-top: 4px;
  position: static;
`;

const ComposerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: stretch;
  border: 2px solid rgba(0, 0, 0, 0);
  padding: 12px 0px;
`;

const ComposerText = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  resize: none;
  min-height: 24px;
  max-height: 720px;
  font-family: 'TwitterChirp';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(15, 20, 25);
  appearance: none;
  outline: none;
  padding: 2px 0px;
  max-width: 501px;
  z-index: 2;
`;

const ComposerTextBefore = styled.div`
  font-family: 'TwitterChirp';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(83, 100, 113);
  position: absolute;
  padding: 2px 0px;
  user-select: none;
  cursor: text;
  z-index: 1;
`;

const ComposerToolbar = styled.div`
  border-top: 1px solid rgb(239, 243, 244);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0px 2px;
  background-color: rgb(255, 255, 255);
`;

const ComposerTools = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  box-sizing: border-box;
`;

const ComposerImageUpload = styled.input`
  height: 0.1px;
  width: 0.1px;
  opacity: 0;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`;

const ComposerImageTool = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -12px 8px -12px 0px;
  min-height: 36px;
  min-width: 36px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition-duration: 0.2s;
  border-radius: 9999px;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

const ComposerSubmit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  margin: 12px 0px 0px 12px;
  min-height: 36px;
  min-width: 36px;
  padding: 0px 16px;
  background-color: rgb(29, 155, 240);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9999px;
  transition-duration: 0.2s;
  font-family: 'TwitterChirp';
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(255, 255, 255);

  cursor: ${(props) => (props.isEmpty ? 'default' : 'pointer')};
  opacity: ${(props) => (props.isEmpty ? 0.5 : null)};
`;

const ComposerImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  z-index: 0;
  border-radius: 16px;
  margin: 8px 0px;
`;

const PreviewImage = styled.img`
  height: 100%;
  width: 100%;
  z-index: -1;
  border-radius: 16px;
`;

export const Compose = () => {
  const uid = useContext(AuthContext);
  const [isEmpty, setIsEmpty] = useState(true);
  const input = useRef(null);
  const [draft, setDraft] = useState('');
  const [photoLink, setPhotoLink] = useState();

  const [upload, setUpload] = useState({
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setDraft(e.target.textContent);
    if (e.target.innerText === '') {
      setIsEmpty(true);
    } else setIsEmpty(false);
  };

  const handleSubmit = async () => {
    if (upload.image) {
      await uploadImageAndReturnLink(upload.image).then((link) => {
        createNewTweet(uid, draft, link).then(() => {
          setDraft('');
          input.current.textContent = null;
          setIsEmpty(true);
          setUpload({ image: null });
          setPreview(null);
        });
      });
    } else {
      await createNewTweet(uid, draft);
      setDraft('');
      input.current.textContent = null;
      setIsEmpty(true);
      setUpload({ image: null });
      setPreview(null);
    }
  };

  const handleClickUpload = () => {
    document.getElementById('upload').click();
  };

  const handleUpload = (e) => {
    if (e.target.files[0]) {
      setUpload({ ...upload, image: e.target.files[0] });
    }
  };

  useEffect(() => {
    if (!uid) return;
    const getPhotoURL = async () => {
      const user = await getUserData(uid);
      setPhotoLink(user.photoURL);
    };
    getPhotoURL();
  }, [uid]);

  // setting preview
  useEffect(() => {
    if (!upload.image) return;
    const url = URL.createObjectURL(upload.image);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [upload.image]);

  return (
    <ComposeContainer>
      <ComposeContent>
        <ComposerIconContainer>
          <ComposerIcon src={photoLink} />
        </ComposerIconContainer>
        <Composer>
          <ComposerTextContainer>
            {isEmpty ? (
              <ComposerTextBefore>What's happening?</ComposerTextBefore>
            ) : null}
            <ComposerText
              contentEditable
              onInput={handleChange}
              ref={input}
            ></ComposerText>
          </ComposerTextContainer>
          {preview ? (
            <ComposerImagePreviewContainer>
              <PreviewImage src={preview} />
            </ComposerImagePreviewContainer>
          ) : null}
          <ComposerToolbar>
            <ComposerTools>
              <ComposerImageTool onClick={handleClickUpload}>
                <ComposerImageUpload
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  id="upload"
                  onChange={handleUpload}
                />
                <img src={ComposeImage} alt="Upload" height="20px" />
              </ComposerImageTool>
            </ComposerTools>
            <ComposerSubmit isEmpty={isEmpty} onClick={handleSubmit}>
              Tweet
            </ComposerSubmit>
          </ComposerToolbar>
        </Composer>
      </ComposeContent>
    </ComposeContainer>
  );
};
