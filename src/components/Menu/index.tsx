import { IonGrid, IonRow, IonCol, IonChip, IonItem } from "@ionic/react";

interface MenuProps {
  numberOfDays: number;
}

function dateDiffInDays(a: Date, b: Date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function getDateWithoutYear(date: Date): string {
  const year = date.getFullYear();
  return date.toLocaleDateString().replace(`/${year}`, "");
}

function getRandomFoodPlaceholder(): string {
  const foods: string[] = [
    "pisto",
    "lentejas",
    "macarrones con tomatico",
    "pure de patatas y pollo",
  ];
  return foods[Math.floor(Math.random() * foods.length)];
}

const MenuComponent: React.FC<MenuProps> = ({ numberOfDays }) => {
  const baseDate = new Date();
  return (
    <IonGrid>
      <IonRow>
        <IonCol />
        <IonCol>
          <div>Lunch</div>
        </IonCol>
        <IonCol>
          <div>Dinner</div>
        </IonCol>
      </IonRow>
      {[...new Array(numberOfDays)].map(() => {
        baseDate.setDate(baseDate.getDate() + 1);
        return (
          <IonRow key={`row-${baseDate.toString()}`}>
            <IonCol>
              <div>{getDateWithoutYear(baseDate)}</div>
            </IonCol>
            <IonCol>
              <IonChip>{getRandomFoodPlaceholder()}</IonChip>
            </IonCol>
            <IonCol>
              <IonChip>{getRandomFoodPlaceholder()}</IonChip>
            </IonCol>
          </IonRow>
        );
      })}
    </IonGrid>
  );
};

export default MenuComponent;
