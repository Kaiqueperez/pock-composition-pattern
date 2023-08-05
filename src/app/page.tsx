"use client";
import "react";
import { useState } from "react";
import { Button } from "./components/Button";

export default function Home() {
  const [isNeedShow, setIsNeedShow] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const toogleHandler = () => setIsNeedShow(!isNeedShow);
  const cancelSubscribe = () => setIsCanceled(!isCanceled);

  console.log(isNeedShow);
  return (
    <>
      <div>Welcomo to Jurassic Park</div>
      <Button.Root title="Testando Pattern de composition">
        <Button.Content onClick={toogleHandler} changeBgColor={isNeedShow}>
          <Button.Text text="Click Here to show the suprise span message" />
        </Button.Content>
        {isNeedShow && <Button.Errors errors="Hello i am here brother" />}
      </Button.Root>

      <Button.Root>
        <Button.Content onClick={cancelSubscribe}>
          <Button.Text text="Click Here to cancel your subscribe" />
        </Button.Content>
        {isCanceled && <Button.Errors errors="Your subscribe is canceled" />}
      </Button.Root>
      {/* <Button
        text="Testing span message"
        errorMsg="span message in action"
        title="Testando Parttern de compositon"
        textSecundary="Testing Cancel button"
        errorMsgSecudary="Cancel has been confirmed"
      ></Button>
      <Button
        text="Testing span message"
        errorMsg="span message in action"
        title="Testando Parttern de compositon"
        textSecundary="Testing Cancel button"
        errorMsgSecudary="Cancel has been confirmed"
      ></Button> */}
    </>
  );
}
