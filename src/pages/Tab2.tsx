import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTextarea, IonItem, IonLabel, IonItemDivider, IonList } from '@ionic/react';
import React, { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
       <IonList>
          <IonItemDivider>Default textarea</IonItemDivider>          
          <IonItem>
            <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea in an item with a placeholder</IonItemDivider>
          <IonItem>
            <IonTextarea placeholder="Enter more information here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea in an item with a floating label</IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Disabled and readonly textarea in an item with a stacked label</IonItemDivider>
          <IonItem>
            <IonLabel position="stacked">Summary</IonLabel>
            <IonTextarea
              disabled
              readonly
              value={text} onIonChange={e => setText(e.detail.value!)}>
            </IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea that clears the value on edit</IonItemDivider>
          <IonItem>
            <IonLabel>Comment</IonLabel>
            <IonTextarea clearOnEdit={true} value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>Textarea with custom number of rows and cols</IonItemDivider>
          <IonItem>
            <IonLabel>Notes</IonLabel>
            <IonTextarea rows={6} cols={20} placeholder="Enter any notes here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
