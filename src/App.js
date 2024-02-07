import Form from "./components/Form";

import StepContextProvider from "./components/context/stepsContext/StepContextProvider";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
function App() {
  return (
    <StepContextProvider>
      <div className='w-[100wh] h-[100vh] flex justify-center items-center bg-[#fafbff] text-[16px] '>
        <Form>
          <SideBar />
          <Content />
        </Form>
      </div>
    </StepContextProvider>
  );
}
export default App;
