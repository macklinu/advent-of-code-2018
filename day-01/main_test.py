import os
from typing import List
import pytest
from main import frequency


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
    assert (frequency(input)) == 513

