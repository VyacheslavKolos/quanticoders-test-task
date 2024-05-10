import Flex from '../../ui/layout/Flex.tsx';
import TabsBlock from './components/TabsBlock';
import MainText from '../../ui/typography/MainText.tsx';
import FormLayout from '../../ui/layout/core/FormLayout.tsx';
import HelpsTabs from '../../ui/helps-tabs';
import Container from '../../ui/layout/Container.tsx';

const Help = () => (
  <Flex.Wrapper className="bg-gray-100 ">
    <Container className="bg-[#8094b3] mt-10 w-full">
      <Flex.Wrapper
        column
        iCenter
        className="bg-white p-5 tablet:py-10 tablet:px-14 rounded-lg w-full "
      >
        <h1 className="text-blue-100 text-h1 tablet:text-large-title">Заповніть форму</h1>

        <FormLayout>
          <TabsBlock />

          <h1 className="text-blue-100 text-h1 tablet:text-large-title">Види допомоги</h1>
          <MainText className="text-gray-200 mt-2">Ви можете змінити вид допомоги</MainText>

          <HelpsTabs />
        </FormLayout>
      </Flex.Wrapper>
    </Container>
  </Flex.Wrapper>
);

export default Help;
