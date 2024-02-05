"use client";
import { Button, Label, LabelSmall, Navbar } from "@/Components";
import Image from "next/image";

export default function Home(props) {
  const { searchParams } = props;
  return (
    <>
      <Navbar query={searchParams.q ? searchParams.q : ""} />
      <br />
      <Label color="bluse" text="Rejected" />
      <br />
      <LabelSmall color="bluse" text="Rejected" />
      <br />
      <Button
        text={"Disabled Button Component"}
        route={"/about"}
        isDisabled={true}
      />
      <br />
      <Button text={"Button Component"} route={"/about"} isDisabled={false} />
    </>
  );
}
