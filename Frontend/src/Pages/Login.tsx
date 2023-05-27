
 import React, { useState, useRef, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  useToast,
  FormLabel
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
import { useMutation } from "react-query";
import jwtDecode from "jwt-decode";


type LoginFormProps = {
  onSuccess:(token:string) => void;
};

type LoginFormData = {
  email: string,
  password: string
};



const Login = ({onSuccess}: LoginFormProps) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  })

const toast = useToast();

const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
  const {name, value} = event.target;
  setFormData((prevFormData) => ({...prevFormData, [name]: value}))
}

const loginMutation = useMutation(
  async (data: LoginFormData) => {
    const response = await fetch("https://localhost:7119/api/Account/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if(!response.ok){
      throw new Error("Invalid UserName or Password")
    }
    const {accessToken, refreshToken} = await response.json(); // {token, email}
    console.log(accessToken)
    return accessToken;
  },
  {
    onSuccess: (date)=>{
      const decodedToken = jwtDecode(date) as {email: string};
      // onSuccess(date);
      toast({
        title: "Login Successful",
        description: `Logged in as ${decodedToken.email}`,
        status: "success",
        duration: 2500,
        isClosable: true
      });
      navigate('/dashboard')
    },
    onError: (error: Error) => {
      toast({
        title: "login faild",
        description: error.message,
        status: "error",
        duration: 2500,
        isClosable: true
      });
    }
  }
);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  loginMutation.mutate(formData);
}

  return (
    <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="gray.200"
        >
      <Stack
         flexDir="column"
         mb="2"
         justifyContent="center"
         alignItems="center"
       >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >

     
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <InputGroup>
        <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
        <Input 
        type="email"
        name="email"
        value={formData.email}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)} 
         placeholder="email address" />
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired >
        <FormLabel>Password</FormLabel>
        <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
        <Input 
        placeholder="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange} />
        </InputGroup>
      </FormControl>
      <Button type="submit" isLoading={loginMutation.isLoading}
         borderRadius={0}
         variant="solid"
         colorScheme="teal"
         width="full"
      >Login</Button>
       </Stack>
    </form>
    </Box>
    </Stack>
    </Flex>
  )
}

export default Login
























// import { FaUserAlt, FaLock } from "react-icons/fa";
// import { unstable_HistoryRouter } from "react-router-dom";
// import ToggleColorMode from "../Components/toggleModeColor";



// const Login = (props:any) => {
//   const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);
// const userRef:any = React.useRef();
// const errRef:any = React.useRef();
// const [user, setUser] = React.useState('');
// const [pwd, setPwd] = React.useState('');
// const [errMsg, setErrMsg] = React.useState('');
// const [success, setSuccess] = React.useState(false);

// useEffect(() => {
//     userRef.current

// }, [])

// useEffect(() => {

//   setErrMsg(' ')
  
// }, [user, pwd])



//   const {setIsLoggedIn} = props
//   const [showPassword, setShowPassword] = React.useState(false);
  
//   const handleShowClick = () => setShowPassword(!showPassword);

//   const navigate = useNavigate();
//   const handleSubmit = async (e:any) =>{
//     e.preventDefault();
//     console.log(user, pwd);
//     setUser('')
//     setPwd('')
//     setSuccess(true)
//   }
//   return (
//     <>
//        <ToggleColorMode  /> 
//     <Flex 
//       flexDirection="column"
//       width="100wh"
//       height="100vh"
      
//       justifyContent="center"
//       alignItems="center"
//     >
      
//       <Stack
//         flexDir="column"
//         mb="2"
//         justifyContent="center"
//         alignItems="center"
//       >
        // <Avatar bg="teal.500" />
        // <Heading color="teal.400">Welcome</Heading>
//         <Box minW={{ base: "90%", md: "468px" }}>
     

//           <form >
//             <Stack 
//               spacing={4}
//               p="1rem"
             
//               boxShadow="md"
//             >
              
//                  <Text ref={errRef} color='red'></Text>
//               <FormControl>

//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     children={<CFaUserAlt color="gray.300" />}
//                   />
//                   <Input type="text" placeholder="UserName" 
//                     id="username"
//                     ref={userRef}
//                     autoComplete='off'
//                     onChange={(e)=> setUser(e.target.value)}
//                     value={user}
//                     required
//                      />
//                 </InputGroup>
//               </FormControl>
//               <FormControl>
             
//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     color="gray.300"
//                     children={<CFaLock color="gray.300" />}
//                   />
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password" id="password"
//                     autoComplete='off'
//                     onChange={(e)=> setPwd(e.target.value)}
//                     value={pwd}
//                     required
                    
//                   />
//                   <InputRightElement width="4.5rem">
//                     <Button h="1.75rem" size="sm" onClick={handleShowClick}>
//                       {showPassword ? "Hide" : "Show"}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
                
//               </FormControl>
//               <Button
//                 borderRadius={7}
//                 type="submit"
//                 variant="solid"
//                 colorScheme="teal"
//                 width="100%"
//                 alignItems='center'
//                 onClick={()=>{
//                   setIsLoggedIn(true)
//                 }}   
//               >
//                 Login
//               </Button>
              
//             </Stack>
//           </form>
//         </Box>
//       </Stack>
//       <Box>
//         New?{" "}
//         <Link color='teal.500' href="#" >Sign Up</Link>
       
//       </Box>
//     </Flex>
    
//     </>
//   );
// };

// export default Login;

