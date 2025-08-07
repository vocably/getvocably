import { config } from 'dotenv-flow';
import 'zx/globals';

config();

async function listAllUsers() {
  let users = [];
  const result = await $`aws cognito-idp list-users \
      --user-pool-id ${process.env.USER_POOL_ID} \
      --query "Users[].Attributes[?Name=='email'].Value" \
      --output text`.quiet();

  const lines = result.stdout.trim().split(/\s+/).filter(Boolean);
  users.push(...lines);
  return [...new Set(users)]; // Remove duplicates just in case
}

async function listGroupUsers() {
  let users = [];
  const result = await $`aws cognito-idp list-users-in-group \
      --user-pool-id ${process.env.USER_POOL_ID} \
      --group-name 'paid' \
      --query "Users[].Attributes[?Name=='email'].Value" \
      --output text`.quiet();

  const lines = result.stdout.trim().split(/\s+/).filter(Boolean);
  users.push(...lines);
  return [...new Set(users)];
}

(async () => {
  const allEmails = await listAllUsers();
  const groupEmails = await listGroupUsers();

  const groupSet = new Set(groupEmails);

  const emailsNotInGroup = allEmails.filter((email) => !groupSet.has(email));

  for (const email of emailsNotInGroup) {
    console.log(email);
  }
})();
