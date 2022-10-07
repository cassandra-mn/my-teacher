import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/Header/List/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Professor 1",
      photo: "https://github.com/profile.png",
      description: "Aulas com o Professor 1",
      value: 100
    },
    {
      id: 2,
      name: "Professor 2",
      photo: "https://github.com/profile.png",
      description: "Aulas com o Professor 2",
      value: 100
    },
    {
      id: 3,
      name: "Professor 3",
      photo: "https://github.com/profile.png",
      description: "Aulas com o Professor 3",
      value: 100
    },
    {
      id: 4,
      name: "Professor 4",
      photo: "https://github.com/profile.png",
      description: "Aulas com o Professor 4",
      value: 100
    },
  ];

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <List teachers={teachers}/>
    </Box>
  )
}

export default Home
