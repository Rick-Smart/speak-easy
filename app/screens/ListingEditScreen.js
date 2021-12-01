import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
  FormImagePicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniure",
    value: 1,
    backgroundColor: "red",
    icon: "table-furniture",
  },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "tshirt-v" },
  { label: "Cameras", value: 3, backgroundColor: "blue", icon: "camera" },
  { label: "Vehicles", value: 4, backgroundColor: "brown", icon: "car" },
  { label: "Shoes", value: 5, backgroundColor: "orange", icon: "shoe-heel" },
  {
    label: "Games",
    value: 6,
    backgroundColor: "purple",
    icon: "gamepad-square",
  },
  {
    label: "Books",
    value: 7,
    backgroundColor: "gold",
    icon: "book-open-page-variant",
  },
  { label: "Tech", value: 9, backgroundColor: "silver", icon: "laptop-mac" },
  { label: "Bikes", value: 8, backgroundColor: "pink", icon: "bike" },
];

export default function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/speak-easy-logo.png")}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          images: [],
        }}
        onSubmit={() => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="50%"
        />
        <AppFormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          placeholder="Category"
          width="75%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
