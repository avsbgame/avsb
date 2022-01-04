// SPDX-License-Identifier: AGPL-3.0-only
//
// Simple utility to generate a commitment to a vote

import { soliditySha3 } from "web3-utils";

enum Choice {
  A = 1,
  B = 2,
}

const computeCommitment = (
  walletAddress: string,
  vote: Choice,
  salt: string
): string => {
  const commit = soliditySha3(
    { t: "address", v: walletAddress },
    { t: "uint8", v: vote },
    { t: "bytes32", v: salt }
  );
  if (commit) return commit;
  else throw Error("Invalid input, cannot compute commitment");
};
