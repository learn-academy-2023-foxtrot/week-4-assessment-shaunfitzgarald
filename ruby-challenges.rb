# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
def even_or_odd num
   if num % 2 == 0
    p "#{num} is even"
   else
    p "#{num} is odd"
   end
end

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
even_or_odd reposts1 
even_or_odd reposts2
even_or_odd reposts3
# Expected output: '221 is odd'

=begin Pseudo code:
name: even_or_odd
input: a number
output: a string interpolated answer of even or odd.
process: define the method and give it the parameter num. Use an if statement with a modulo to determine if even or odd. Use string interpolation to put out a string of words as an answer.

=end
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def delete_vowels string
    string.delete'aeiouAEIOU'
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p delete_vowels beatles_album1
p delete_vowels beatles_album2
p delete_vowels beatles_album3

=begin
Pseudo code:
name:delete_vowels
input: a string
output: a string
Process: Create a method using .delete and follow it up with all of the vowels in both cases. End. Print call the methods with the arguments

=end
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
def palindrome word
    if word.upcase.reverse == word.upcase
        "#{word} is a palendrome"
    else
        "#{word} is not a palendrome"
    end
end
palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p palindrome palindrome_test_case1
p palindrome palindrome_test_case2
p palindrome palindrome_test_case3

p palindrome "Hannah"
p palindrome "shaunfitzgarald"

=begin
Pseudo code:
name:palindrome
input: a string
output: an interpolated string
Process: We're going to create a method that takes in a string calitalizes all the letters (.upcase) then reverses all the letters (.reverse) and compares itself to the original word that is also in .upcase. If they are the same, it is a palindrome, if not, it is not a palindrome.
=end