class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        stack = []
        mapping = {"]": "[", "}": "{", ")": "("}
        for ch in s:
            if ch in mapping: 
                if len(stack) == 0 or stack[len(stack)-1] != mapping[ch]:
                    return False
                else:
                    stack.pop()
            else: 
                stack.append(ch)
        
        if len(stack) == 0: 
            return True
        else: 
            return False