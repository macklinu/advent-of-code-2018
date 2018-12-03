import os
from pathlib import Path
from day_02 import checksum


def test_part_one_example():
    test_data = ["abcdef", "bababc", "abbcde", "abcccd", "aabcdd", "abcdee", "ababab"]
    assert checksum("\n".join(test_data)) == 12


def test_part_one_answer():
    data = Path("day-02/input.txt").read_text()
    assert checksum(data) == 6972
