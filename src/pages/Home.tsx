import { IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Clipboard } from '@capacitor/clipboard';
import React, { useRef, useState } from 'react';

const Home: React.FC = () => {

  const pageRef = useRef<HTMLElement | undefined>();

  const [showModal, setShowModal] = useState(false);

  const onPhotoSelect = async () => {
    try {
      const photo = await Camera.getPhoto({
        allowEditing: true,
        quality: 100,
        resultType: CameraResultType.DataUrl,
        webUseInput: true,
        source: CameraSource.Prompt,
      });
      if (photo && photo.dataUrl) {
      }
    } catch (error) { }
  };

  const onCopy = async () => {
    await Clipboard.write({
      string: 'test!'
    })
  }

  return (
    <>
      <IonPage ref={pageRef}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
          <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          <IonButton onClick={onCopy}>Copy To Clipboard</IonButton>
        </IonContent>
      </IonPage>
      <IonModal isOpen={showModal} presentingElement={pageRef.current}>
        <div>Modal Content</div>
        <IonButton onClick={onPhotoSelect}>Change Photo</IonButton>
      </IonModal>
    </>
  );
};

export default Home;
