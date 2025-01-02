import { KeysOf, PartialDeep } from '../src/index';

interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
  };
}

describe('type-transform', () => {
  test('PartialDeep makes all properties optional', () => {
    type PartialUser = PartialDeep<User>;

    const user: PartialUser = {
      name: 'John Doe',
      address: {
        city: 'New York',
      },
    };

    expect(user).toBeDefined();
  });

  test('KeysOf extracts all keys of an object', () => {
    type UserKeys = KeysOf<User>;

    const keys: UserKeys = 'id';
    expect(keys).toBe('id');
  });
});
