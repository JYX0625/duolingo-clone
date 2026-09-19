import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  SelectField,
  TextField,
} from "react-admin";

import { ResponsiveDatagrid } from "../components/responsive-datagrid";

export const ChallengeList = () => {
  return (
    <List>
      <ResponsiveDatagrid
        mobileColumns={[
          { label: "ID", render: (record) => record.id },
          { label: "Question", render: (record) => record.question },
          { label: "Type", render: (record) => record.type },
          { label: "Lesson", render: (record) => record.lessonId },
          { label: "Order", render: (record) => record.order },
        ]}
        desktopView={
          <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="question" />
            <SelectField
              source="type"
              choices={[
                {
                  id: "SELECT",
                  name: "SELECT",
                },
                {
                  id: "ASSIST",
                  name: "ASSIST",
                },
              ]}
            />
            <ReferenceField source="lessonId" reference="lessons" />
            <NumberField source="order" />
          </Datagrid>
        }
      />
    </List>
  );
};
