import React from "react";
import { Link, NavLink } from "react-router-dom";
import img2 from "../src/assets/img/img1.png";
import logo from "../src/assets/img/logo.jpg";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="w-[200px]">
          <DrawerCloseButton />

          <DrawerBody className="w-[280px]">
            <nav className="flex flex-col py-2 gap-3">
              <NavLink className="text-[20px] r1100:text-[17px] r900:text-[16px] border-2 border-black px-2 py-1 rounded-md">
                <p>O'zim haqimda</p>
              </NavLink>
              <NavLink className="text-[20px] r1100:text-[17px] r900:text-[16px] border-2 border-black px-2 py-1 rounded-md">
                <p>Mening proyektlarim</p>
              </NavLink>
              <NavLink className="text-[20px] r1100:text-[17px] r900:text-[16px] border-2 border-black px-2 py-1 rounded-md">
                <p>Bog'lanish</p>
              </NavLink>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function App() {
  return (
    <div className="bg-background bg-cover">
      <div className="backdrop-blur-[1px]">
        <header className="flex justify-between items-center p-5 h-[10vh]">
          <Link>
            {/* <h1 className="text-[25px]">QX</h1> */}
            <img
              className="w-[50px] rounded-[50%] r1100:w-[40px]"
              src={logo}
              alt=""
            />
          </Link>
          <div className="flex items-center">
            <nav className="flex gap-10 items-center r900:gap-7 r700:hidden">
              <NavLink className="text-[20px] r1100:text-[17px] r900:text-[16px]">
                <p>O'zim haqimda</p>
              </NavLink>
              <NavLink className="text-[20px] r1100:text-[17px] r900:text-[16px]">
                <p>Mening proyektlarim</p>
              </NavLink>
              <NavLink className="text-[20px] r1100:text-[17px] r900:text-[16px]">
                <p>Bog'lanish</p>
              </NavLink>
            </nav>
            <select
              className="border-[2px] border-black p-[1px] rounded-md outline-none bg-transparent cursor-pointer text-[20px] ml-10 r1100:text-[17px] r900:ml-5 r700:mr-5"
              name=""
              id=""
            >
              <option value="">uz</option>
              <option value="">eng</option>
              <option value="">ru</option>
            </select>
            <div className="hidden r700:inline">
              <DrawerExample />
            </div>
          </div>
        </header>
        <main className="max-w-[1440px] m-auto flex py-[100px] px-[80px] h-[90vh] r950:py-[80px] r950:px-[60px] r900:flex-col-reverse r900:items-center r900:py-[20px] r900:px-[10px] r900:justify-end r750:py-[50px]">
          <div className="w-[65%] flex flex-col justify-center r900:w-[100%]">
            <p className="text-[50px] flex gap-5 mb-[40px] r1200:text-[40px] r1200:mb-[20px] r1100:text-[35px] r900:justify-center r850:text-[30px]">
              Assalomu <span>alaykum.</span>
            </p>
            <h1 className="text-[30px] leading-[35px] mb-[30px] r1200:text-[26px] r1100:text-[22px] r900:text-center r850:text-[20px]">
              Mening ismim Qadamboy Xudayberganov
            </h1>
            <p className="text-[20px] r1200:text-[18px] r1100:text-[15px] r900:text-center r850:text-[15px] ">
              Bu sayt menga tegishli bo'lgan barcha <br /> ma'lumotlarni bir
              joyga to'plash maqsadida yaratilgan. <br /> Bu yerda siz men
              haqimda to'liqroq ma'lumotga ega bo'lishingiz mumkin.
            </p>
          </div>
          <div className="w-[35%] flex items-center justify-center r900:w-[40%]">
            <img src={img2} alt="" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
