from collections import Counter, defaultdict
from functools import reduce
from typing import DefaultDict


def checksum(input: str) -> int:
    def reducer(d, s):
        counts = Counter(s).values()
        d[2] += 1 if 2 in counts else 0
        d[3] += 1 if 3 in counts else 0
        return d

    checksum_dict: DefaultDict[int, int] = reduce(
        reducer, input.splitlines(), defaultdict(int)
    )

    return checksum_dict[2] * checksum_dict[3]


def common_letters(input: str) -> str:
    return ""
