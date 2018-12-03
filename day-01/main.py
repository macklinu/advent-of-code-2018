def frequency(input: str) -> int:
    return sum([int(value) for value in input.splitlines()])
