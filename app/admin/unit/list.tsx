import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

import { ResponsiveDatagrid } from "../components/responsive-datagrid";

export const UnitList = () => {
  return (
    <List>
      <ResponsiveDatagrid
        mobileColumns={[
          { label: "ID", render: (record) => record.id },
          { label: "Title", render: (record) => record.title },
          { label: "Description", render: (record) => record.description },
          { label: "Course", render: (record) => record.courseId },
          { label: "Order", render: (record) => record.order },
        ]}
        desktopView={
          <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <ReferenceField source="courseId" reference="courses" />
            <TextField source="order" />
          </Datagrid>
        }
      />
    </List>
  );
};
