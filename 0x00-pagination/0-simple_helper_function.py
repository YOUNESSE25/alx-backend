#!/usr/bin/env python3
"""
index_range
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Implement a method named get_page that takes two integer
    arguments page with default value 1 and page_size with
    default value 10.
    """
    Start, End = 0, 0
    for j in range(page):
        Start = End
        End += page_size

    return (Start, End)
