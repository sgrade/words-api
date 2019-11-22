export * from './store.service';
import { StoreService } from './store.service';
export * from './user.service';
import { UserService } from './user.service';
export * from './word.service';
import { WordService } from './word.service';
export * from './words.service';
import { WordsService } from './words.service';
export const APIS = [StoreService, UserService, WordService, WordsService];
