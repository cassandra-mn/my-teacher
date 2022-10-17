import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/Header/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
    teachers, 
    data, 
    setData, 
    teacherSelected, 
    setTeacherSelected, 
    selectClass,
    message,
    setMessage
  } = useIndex();

  return (
    <div>
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <List teachers={teachers} onSelect={teacher => setTeacherSelected(teacher)}/>
      </Box>

      <Dialog onClose={() => setTeacherSelected(null)} open={teacherSelected ? true : false} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label='Digite o nome'
              type='text'
              fullWidth
              value={data.name}
              onChange={(e) => setData({...data, name: e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label='Digite o email'
              type='text'
              fullWidth
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value})}
            />
          </Grid>
        </Grid>
        
        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setTeacherSelected(null)}>Cancelar</Button>
          <Button onClick={() => selectClass()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={message} 
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </div>
  )
}

export default Home
