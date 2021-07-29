import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from '../SingUpPage/styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { AddAdress } from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress'


const SignUpFormAdress = () => {
  const history = useHistory()
  const [input, onChange, cleanFields] = useForm({ 
  street:'',
  number:'',
  neighbourhood:'',
  city:'',
  state: '',
  complement:''})
  const [isLoading] = useState(false)

  const onSubmitFormAdress = (event) =>{
    console.log('Submeteu')
    event.preventDefault()
    AddAdress(input,history,cleanFields)
}
  return (
    <form onSubmit={onSubmitFormAdress}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            name={'street'}
            value={input.street}
            onChange={onChange}
            label={'Logadouro'}
            placeholder={'Rua / Av.'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            InputLabelProps={{
                shrink: true
            }}
          />
          <TextField
            name={'number'}
            value={input.number}
            onChange={onChange}
            label={'Número'}
            placeholder={'Número'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'number'}
            InputLabelProps={{
                shrink: true
            }}
          />
           <TextField
            name={'complement'}
            value={input.complement}
            onChange={onChange}
            label={'Complemento'}
            placeholder={'Apto / Bloco'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            InputLabelProps={{
                shrink: true
            }}
          />
          <TextField
                    name={'neighbourhood'}
                    value={input.neighbourhood}
                    onChange={onChange}
                    label={'Bairro'}
                    placeholder={'Bairro'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'text'}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
           <TextField
            name={'city'}
            value={input.city}
            onChange={onChange}
            label={'Cidade'}
            placeholder={'Cidade'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            InputLabelProps={{
                shrink: true
            }}
          />
          <TextField
            name={'state'}
            value={input.state}
            onChange={onChange}
            label={'Estado'}
            placeholder={'Estado'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
            InputLabelProps={{
                shrink: true
            }}
          />
           
            
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Salvar</>}
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default  SignUpFormAdress
