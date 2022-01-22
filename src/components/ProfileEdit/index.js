import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../api/auth';
import { FormInput } from '../FormInput';
import { getUserData, setUserData } from '../../api/database';
import { uploadImageAndReturnLink } from '../../api/storage';
import { useNavigate } from 'react-router-dom';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  flex: 1 1 auto;
  overflow: auto;
  max-width: 600px;
`;

const EditorFlow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  padding-bottom: 64px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 8px;
`;

const InputContainer = styled.div`
  padding: 0px 16px;
`;

const ProfilePictureContainer = styled.div`
  margin-top: -3rem;
  margin-left: 15px;
`;

const ProfilePicturePreview = styled.div`
  border-radius: 9999px;
  border: 4px solid white;
`;

const ProfilePictureImage = styled.img`
  width: 112px;
  border-radius: 9999px;
`;

const ProfileCoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0);
`;

const ProfileCoverPreview = styled.div``;

const ProfileCoverImage = styled.img`
  width: 579px;
`;

const InputLabel = styled.label`
  background-color: rgb(15, 20, 25);
  color: rgb(255, 255, 255);
  padding: 0px 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9999px;
  min-height: 32px;
  min-width: 32px;
  transition-duration: 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'TwitterChirp';
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  &:hover {
    background-color: rgb(39, 44, 48);
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const SaveButtonContainer = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SaveButton = styled.div`
  background-color: rgb(15, 20, 25);
  color: rgb(255, 255, 255);
  padding: 0px 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 9999px;
  min-height: 32px;
  min-width: 32px;
  transition-duration: 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'TwitterChirp';
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  &:hover {
    background-color: rgb(39, 44, 48);
  }
`;

export const ProfileEdit = () => {
  const uid = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [bio, setBio] = useState('');
  const [cover, setCover] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!uid) return;
    getUserData(uid).then((userData) => {
      setUser(userData);
      setName(userData.name);
      setHandle(userData.user);
      setBio(userData.bio);
    });
  }, [uid]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleHandleChange = (e) => {
    setHandle(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePhotoInput = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      const url = URL.createObjectURL(e.target.files[0]);
      setPhotoPreview(url);
    }
  };

  const handleCoverInput = (e) => {
    if (e.target.files[0]) {
      setCover(e.target.files[0]);
      const url = URL.createObjectURL(e.target.files[0]);
      setCoverPreview(url);
    }
  };

  const handleSubmit = async () => {
    // upload photo and cover if present, if not, do not update photo/cover
    if (photo) {
      if (cover) {
        // case 1: photo and cover change
        const photoURL = await uploadImageAndReturnLink(photo);
        const coverURL = await uploadImageAndReturnLink(cover);
        const user = handle;
        const updatedData = { name, user, bio, photoURL, coverURL };
        console.log(updatedData);
        await setUserData(updatedData, uid);
        navigate(-1);
      }
      // case 2: photo change, no cover change
      const photoURL = await uploadImageAndReturnLink(photo);
      const user = handle;
      const updatedData = { name, user, bio, photoURL };
      console.log(updatedData);
      await setUserData(updatedData, uid);
      navigate(-1);
    }
    // case 3: no image changes
    const user = handle;
    const updatedData = { name, user, bio };
    console.log(updatedData);
    await setUserData(updatedData, uid);
    navigate(-1);
  };

  return (
    <EditorContainer>
      <EditorFlow>
        <ProfileCoverContainer>
          <ProfileCoverPreview>
            <ProfileCoverImage src={coverPreview || user.coverURL} />
          </ProfileCoverPreview>
        </ProfileCoverContainer>
        <TopContainer>
          <ProfilePictureContainer>
            <ProfilePicturePreview>
              <ProfilePictureImage src={photoPreview || user.photoURL} />
            </ProfilePicturePreview>
          </ProfilePictureContainer>
          <ImageButtons>
            <InputLabel>
              Upload new photo
              <ImageInput type="file" accept="image/jpeg,image/png,image/webp" onChange={handlePhotoInput} />
            </InputLabel>
            <InputLabel>
              Upload new cover
              <ImageInput type="file" accept="image/jpeg,image/png,image/webp" onChange={handleCoverInput} />
            </InputLabel>
          </ImageButtons>
        </TopContainer>
        <InputContainer>
          <FormInput title="Name" type="text" onChange={handleNameChange} defaultValue={user.name} />
        </InputContainer>
        <InputContainer>
          <FormInput title="Handle" type="text" onChange={handleHandleChange} defaultValue={user.user} />
        </InputContainer>
        <InputContainer>
          <FormInput title="Bio" type="text" onChange={handleBioChange} defaultValue={user.bio} />
        </InputContainer>
        <SaveButtonContainer>
          <SaveButton onClick={handleSubmit}>Save</SaveButton>
        </SaveButtonContainer>
      </EditorFlow>
    </EditorContainer>
  );
};
