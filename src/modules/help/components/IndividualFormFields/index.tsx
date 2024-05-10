import Flex from '../../../../ui/layout/Flex.tsx';
import TextFieldController from '../../../../ui/inputs/controllers/TextFieldController.tsx';
import PhoneNumberController from '../../../../ui/inputs/controllers/PhoneNumberController.tsx';

const IndividualFormFields = () => (
  <Flex.Wrapper jBetween iCenter className="w-full flex-wrap">
    <Flex.Wrapper column gap="24px" className="mt-[24px]">
      <Flex.Wrapper gap="20px">
        <TextFieldController name="name" label="Ім'я" />

        <TextFieldController name="surname" label="Фамілія" />
      </Flex.Wrapper>

      <TextFieldController name="companyName" label="Назва компанії, організації" />
      <TextFieldController name="email" label="Email-адрес" />
      {/* <TextFieldController name="phoneNumber" label="Номер телефону" /> */}
      <PhoneNumberController name="phoneNumber" label="Номер телефону" />
    </Flex.Wrapper>

    <Flex.Wrapper column gap="24px" className="mt-[24px]">
      <TextFieldController name="country" label="Країна" />

      <Flex.Wrapper gap="20px">
        <TextFieldController name="city" label="Місто" />

        <TextFieldController name="state" label="Штат, район" />
      </Flex.Wrapper>

      <TextFieldController name="adress" label="Адреса" />
      <Flex.Wrapper gap="20px">
        <TextFieldController name="postIndex" label="Поштовий індекс" />

        <TextFieldController className="hidden" />
      </Flex.Wrapper>
    </Flex.Wrapper>
  </Flex.Wrapper>
);

export default IndividualFormFields;
