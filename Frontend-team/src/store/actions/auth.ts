import { PayloadAction } from '@reduxjs/toolkit';
import { auth } from '../firebase';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { ICounter } from '../types';
// Async thunks for handling authentication actions
export const loginWithGoogle = (state: ICounter, action: PayloadAction<number>) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue('Google login failed');
    }
  });
  
  export const loginWithGitHub = createAsyncThunk('auth/loginWithGitHub', async (_, thunkAPI) => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue('GitHub login failed');
    }
  });
  
  export const loginWithEmail = createAsyncThunk(
    'auth/loginWithEmail',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user;
      } catch (error) {
        return thunkAPI.rejectWithValue('Email login failed');
      }
    }
  );
  
  export const registerWithEmail = createAsyncThunk(
    'auth/registerWithEmail',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result.user;
      } catch (error) {
        return thunkAPI.rejectWithValue('Registration failed');
      }
    }
  );
  
  export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Logout failed');
    }
  });