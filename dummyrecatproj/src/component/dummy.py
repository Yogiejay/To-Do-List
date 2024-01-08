def mindis(word1,word2,i,j,oper):
    if word1 == word2:
        return oper
    if i >= len(word1) and j >= len(word2):
        return float("inf")
    else:  
        if j==len(word2) and i < len(word1):
            return oper+len(word1)-i
        elif i == len(word1) and j < len(word2):
            return oper+len(word2)-j
        else:
            if word1[i] == word2[j]:
                return mindis(word1,word2,i+1,j+1,oper)
            else:
                List = list(word1)
                List[i] = word2[j]
                newStr = "".join(List)
                replace = mindis(newStr,word2,i+1,j+1,oper+1)
                List = list(word1)
                List.insert(i,word2[j])
                newStr = "".join(List)
                insert = mindis(newStr,word2,i+1,j+1,oper+1)
                List = list(word1)
                List.pop(i)
                newStr="".join(List)
                delete = mindis(newStr,word2,i,j,oper+1)
                return min(insert,delete,replace)
word1 = "dinitro"
word2 = "acetyl"   
# word1 = "park"
# word2 = "spake"
print(mindis(word1,word2,0,0,0))