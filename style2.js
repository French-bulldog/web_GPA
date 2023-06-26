let longSting = `<form>
<div class="grader">
<input type="text" placeholder="選修課" class="class-type" list="opt" 
value=${objectArray[i].class_name}
/><!--
--><input type="text" placeholder="班級編號" class="class-number" /><!--
--><input type="number" placeholder="學分" min="0" max="6"
class="class-credit" /><!--
--><select name="select" class="select">
<option value=""></option>
<option value="A">A</option>
<option value="A-">A-</option>
<option value="B+">B+</option>
<option value="B">B</option>
<option value="B-">B-</option>
<option value="C+">C+</option>
<option value="C">C</option>
<option value="C-">C-</option>
<option value="D+">D+</option>
<option value="D">D</option>
<option value="D-">D-</option>
<option value="F">F</option>
</select>
</select>
<button class="trash-button">
<i class="fas fa-trash"></i>
</button>
</div>
</form >`

console.log(longSting);