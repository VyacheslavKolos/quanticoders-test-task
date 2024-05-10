import Flex from '../../layout/Flex.tsx';
import Subtitle2 from '../../typography/Subtitle2.tsx';
import TextFieldController from '../../inputs/controllers/TextFieldController.tsx';

const Card = () => (
  <Flex.Wrapper column gap="5px" className="p-2 tablet:p-5 bg-gray-400 rounded-md ">
    <Subtitle2 className="text-white">Номер карти</Subtitle2>
    <Flex.Wrapper gap="10px">
      <TextFieldController name="number1" className="max-w-[80px]" />
      <TextFieldController name="number2" className="max-w-[80px]" />
      <TextFieldController name="number3" className="max-w-[80px]" />
      <TextFieldController name="number4" className="max-w-[80px]" />
    </Flex.Wrapper>

    <Flex.Wrapper gap="40px" className="mt-6">
      <Flex.Wrapper column>
        <Subtitle2 className="text-white">Термін дії</Subtitle2>
        <TextFieldController name="term" className="max-w-[130px] " />
      </Flex.Wrapper>
      <Flex.Wrapper column>
        <Subtitle2 className="text-white">CVC/CVV</Subtitle2>
        <TextFieldController name="cvv" className="max-w-[130px]" />
      </Flex.Wrapper>
    </Flex.Wrapper>
  </Flex.Wrapper>
);

export default Card;
