import React from "react";
import {
  Input,
  Button,
  Box,
  Image,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import Compress from "compress.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validations";
import { FieldNames } from "./enums";
import { FormData } from "./interfaces";
import { theme } from "styles";

const mockTokenUri = {
  priceInEth: 1,
  imgUrl: "",
  name: "",
};

const CreateCollectibleModal = () => {
  const toast = useToast();
  const { compress } = new Compress();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgFile, setImgFile] = React.useState<string>("");

  const onDrop = React.useCallback(
    async (acceptedFiles) => {
      const compressFile = await compress(acceptedFiles, {
        quality: 1, // the quality of the image, max is 1,
        maxWidth: 1000, // the max width of the output image, defaults to 1920px
        maxHeight: 1000, // the max height of the output image, defaults to 1920px
        resize: true, // defaults to true, set false if you do not want to resize the image width and height
      });

      /**
       * @desc - setting base64 data with prefix to ensure we can pass to img src
       * data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA.....
       */
      setImgFile(`${compressFile[0].prefix}${compressFile[0].data}` || "");
    },
    [compress]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // only image format to be accepted
    accept: "image/jpeg, image/png",
    onDrop,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values: any) => {
    if (!imgFile) {
      toast({
        title: `Please add image before Minting Token!`,
        status: "error",
        isClosable: true,
      });
    }
    console.log({
      imgFile,
      ...values,
    });
  };

  return (
    <>
      <Button size="sm" bg="green.200" color="white" onClick={onOpen}>
        Mint Token
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setImgFile("");
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mint Token</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              {!imgFile ? (
                <Box
                  height="10rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  borderRadius="0.5rem"
                  border={`1px dashed ${theme.colors.gray[500]}`}
                  cursor="pointer"
                  mb="1rem"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  )}
                </Box>
              ) : (
                <Image
                  mb="1rem"
                  height="20rem"
                  width="100%"
                  borderRadius="0.5rem"
                  src={imgFile}
                  alt="img-file"
                />
              )}

              <Input
                isInvalid={!!errors[FieldNames.NAME]}
                placeholder="name"
                focusBorderColor="green.200"
                {...register(FieldNames.NAME)}
              />
              {!!errors?.[FieldNames.NAME] && (
                <Text mt="0.25rem" fontSize="xs" color="red">
                  {errors[FieldNames.NAME]?.message}
                </Text>
              )}
              <Input
                isInvalid={!!errors[FieldNames.PRICE]}
                mt="1rem"
                type="number"
                placeholder="price in eth"
                focusBorderColor="green.200"
                {...register(FieldNames.PRICE)}
              />
              {!!errors?.[FieldNames.PRICE] && (
                <Text mt="0.25rem" fontSize="xs" color="red">
                  {errors[FieldNames.PRICE]?.message}
                </Text>
              )}
              <Button
                type="submit"
                mt="2rem"
                mb="1rem"
                bg="green.200"
                width="100%"
                color="white"
              >
                Mint
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCollectibleModal;
