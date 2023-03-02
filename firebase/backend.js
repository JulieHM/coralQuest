import { getDatabase, ref, set, onValue } from "firebase/database";

const db = getDatabase();

// export async function writeUserData(
//   userId,
//   avatarname,
//   selectedavatar,
//   email,
//   sandDollarCount,
//   myCorals,
//   totalSandDollars
// ) {
//   set(ref(db, "users/" + userId), {
//     avatarName: avatarname,
//     selectedAvatar: selectedavatar,
//     email: email,
//     sandDollarCount: sandDollarCount,
//     myCorals: myCorals,
//     totalSandDollars: totalSandDollars,
//   });
// }
