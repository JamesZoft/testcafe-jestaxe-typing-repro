import { Selector } from 'testcafe';

const url = process.env.NODE_ENV === 'ci' ? 'https://localhost:3000' : 'http://localhost:3000';

fixture`do things`.page(url);

test('do stuff', async (t) => {
  await t.click('something');

  await t.typeText(Selector('label').withExactText('Description').sibling('input'), 'text');
});
