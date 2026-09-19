import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

import { ResponsiveDatagrid } from "../components/responsive-datagrid";

export const ChallengeOptionsList = () => {
  return (
    <List>
      <ResponsiveDatagrid
        mobileColumns={[
          { label: "ID", render: (record) => record.id },
          { label: "Text", render: (record) => record.text },
          {
            label: "Correct",
            render: (record) => (record.correct ? "Yes" : "No"),
          },
          { label: "Challenge", render: (record) => record.challengeId },
          { label: "Image", render: (record) => record.imageSrc || "-" },
          { label: "Audio", render: (record) => record.audioSrc || "-" },
        ]}
        desktopView={
          <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="text" />
            <BooleanField source="correct" />
            <ReferenceField source="challengeId" reference="challenges" />
            <TextField source="imageSrc" />
            <TextField source="audioSrc" />
          </Datagrid>
        }
      />
    </List>
  );
};
