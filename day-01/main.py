from itertools import cycle, accumulate
from typing import List
import operator
import pdb


def frequency(input: str) -> int:
    return sum(to_int_list(input))


def frequency_reached_twice(input: str) -> int:
    reached_twice: int
    seen = {0}
    for freq in accumulate(cycle(to_int_list(input))):
        if freq in seen:
            reached_twice = freq
            break
        seen.add(freq)
    return reached_twice


def to_int_list(input: str) -> List[int]:
    return [int(value) for value in input.splitlines()]

