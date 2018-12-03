import os
from typing import List
import pytest
from main import frequency, frequency_reached_twice


with open(os.path.join(os.getcwd(), "day-01", "input.txt"), "r") as myfile:
    input = myfile.read()


def list_to_string(l: List[str]) -> str:
    return "\n".join(l)


@pytest.mark.parametrize(
    "i,o",
    [
        pytest.param(["+1", "+1", "+1"], 3),
        pytest.param(["+1", "+1", "-2"], 0),
        pytest.param(["-1", "-2", "-3"], -6),
    ],
)
def test_part_one_examples(i, o):
    assert frequency(list_to_string(i)) == o


def test_part_one_solution():
    assert frequency(input) == 513


@pytest.mark.parametrize(
    "i,o",
    [
        pytest.param(["+1", "-1"], 0),
        pytest.param(["+3", "+3", "+4", "-2", "-4"], 10),
        pytest.param(["-6", "+3", "+8", "+5", "-6"], 5),
        pytest.param(["+7", "+7", "-2", "-7", "-4"], 14),
    ],
)
def test_part_two_examples(i, o):
    assert frequency_reached_twice(list_to_string(i)) == o


def test_part_two_answer():
    assert frequency_reached_twice(input) == 287
