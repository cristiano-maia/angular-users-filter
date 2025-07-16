import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';

const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const checkDateInterval = (user: IUser) =>
    user.nome.toLowerCase().includes(name.toLowerCase());

  const filteredList = usersList.filter(checkDateInterval);

  return filteredList;
};

const filterUsersListByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo === status);
  return filteredList;
};

const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  const DATES_NOTE_SELECTED = startDate === undefined && endDate === undefined;

  if (DATES_NOTE_SELECTED) {
    return usersList;
  }

  const listFiltered = usersList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate as Date,
      end: endDate as Date,
    })
  );
  return listFiltered;
};

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);


  return filteredList;
}

export { filterUsersList };
