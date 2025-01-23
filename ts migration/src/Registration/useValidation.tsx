import { useState } from "react";

const unformatPrice = (value: number) => {
  return value.toString().replace(/,/g, ""); // 숫자를 문자열로 변환 후 쉼표 제거
};

interface ValidationErrors {
  //에러메세지 타입
  productName?: string;
  productDescription?: string;
  productPrice?: string;
  productTag?: string;
}

export function useValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateProductName = (productName: string): void => {
    if (productName.length < 1 || productName.length > 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        productName: "10자 이내로 입력해주세요",
      }));
    } else {
      setErrors((prevErrors) => {
        const { productName, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateProductDescription = (productDescription: string): void => {
    if (productDescription.length < 10 || productDescription.length > 100) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        productDescription: "10자 이상 입력해주세요",
      }));
    } else {
      setErrors((prevErrors) => {
        const { productDescription, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateProductPrice = (productPrice: number): void => {
    const priceWithoutComma = unformatPrice(productPrice); // 쉼표를 제거한 가격
    if (!/^\d+$/.test(priceWithoutComma) || priceWithoutComma.length < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        productPrice: "숫자로 입력해주세요",
      }));
    } else {
      setErrors((prevErrors) => {
        const { productPrice, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateProductTag = (productTag: string): void => {
    if (productTag.length > 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        productTag: "5글자 이내로 입력해주세요",
      }));
    } else {
      setErrors((prevErrors) => {
        const { productTag, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validate = (
    productName: string,
    productDescription: string,
    productPrice: number,
    productTag: string
  ): void => {
    validateProductName(productName);
    validateProductDescription(productDescription);
    validateProductPrice(productPrice);
    validateProductTag(productTag);
  };

  return {
    errors,
    validate,
  };
}
