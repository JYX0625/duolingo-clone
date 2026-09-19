import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

import { ResponsiveDatagrid } from "../components/responsive-datagrid";

export const LessonList = () => {
  return (
    <List>
      <ResponsiveDatagrid
        mobileColumns={[
          { label: "ID", render: (record) => record.id },
          { label: "Title", render: (record) => record.title },
          { label: "Unit", render: (record) => record.unitId },
          { label: "Order", render: (record) => record.order },
        ]}
        desktopView={
          <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="title" />
            <ReferenceField source="unitId" reference="units" />
            <NumberField source="order" />
          </Datagrid>
        }
      />
    </List>
  );
};
