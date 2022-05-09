import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../../services/api';
import { FileInput } from '../Input/FileInput';
import { TextInput } from '../Input/TextInput';

interface FormAddImageProps {
  closeModal: () => void;
}

export function FormAddImage({ closeModal }: FormAddImageProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('');
  const [localImageUrl, setLocalImageUrl] = useState('');
  const toast = useToast();

  const formValidations = {
    image: {
      // TODO REQUIRED, LESS THAN 10 MB AND ACCEPTED FORMATS VALIDATIONS
    },
    title: {
      // TODO REQUIRED, MIN AND MAX LENGTH VALIDATIONS
    },
    description: {
      // TODO REQUIRED, MAX LENGTH VALIDATIONS
    },
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(
    // TODO MUTATION API POST REQUEST,
    {
      // TODO ONSUCCESS MUTATION
    }
  );

  const { register, handleSubmit, reset, formState, setError, trigger } =
    useForm();
  const { errors } = formState;

  const onSubmit = async (data: Record<string, unknown>): Promise<void> => {
    console.log('data', data);
    console.log('errors', errors);
    // try {
    //   // TODO SHOW ERROR TOAST IF IMAGE URL DOES NOT EXISTS
    //   // TODO EXECUTE ASYNC MUTATION
    //   // TODO SHOW SUCCESS TOAST
    // } catch {
    //   // TODO SHOW ERROR TOAST IF SUBMIT FAILED
    // } finally {
    //   // TODO CLEAN FORM, STATES AND CLOSE MODAL
    // }
  };

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FileInput
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={setError}
          trigger={trigger}
          // TODO SEND IMAGE ERRORS
          error={errors.image}
          // TODO REGISTER IMAGE INPUT WITH VALIDATIONS

          {...register('image', {
            required: 'Arquivo obrigatório',
            // pattern: {
            //   value: /(gif|jpe?g|png)$/,
            //   message: 'Somente são aceitos arquivos PNG, JPEG e GIF',
            // },
            validate: {
              lessThan10MB: file => file[0].size < 10000000 || 'O arquivo deve ser menor que 10MB',
              acceptedFormats: file => new RegExp(/(gif|jpe?g|png)$/).test(file[0].type) || 'Somente são aceitos arquivos PNG, JPEG e GIF.'
            },
          })}
        />

        <TextInput
          placeholder="Título da imagem..."
          // TODO SEND TITLE ERRORS
          error={errors.title}
          // TODO REGISTER TITLE INPUT WITH VALIDATIONS
          {...register('title', {
            required: 'Título obrigatório',
            min: {
              value: 2,
              message: 'Mínimo de 2 caracteres',
            },
            max: {
              value: 20,
              message: 'Máximo de 20 caracteres',
            },
          })}
        />

        <TextInput
          placeholder="Descrição da imagem..."
          error={errors.description}
          // TODO SEND DESCRIPTION ERRORS
          // TODO REGISTER DESCRIPTION INPUT WITH VALIDATIONS
          {...register('description', {
            required: 'Descrição obrigatória',
            max: {
              value: 65,
              message: 'Máximo de 65 caracteres',
            },
          })}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
}
