import { FlatList } from 'react-native';

import { ExpenseItem } from '../components/ExpenseItem';

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={item => item.id}
      renderItem={itemData => <ExpenseItem {...itemData.item} />}
    />
  );
};
