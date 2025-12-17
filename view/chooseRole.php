<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choose Role</title>
    <link rel="stylesheet" href="../assets/css/chooseRole.css">
</head>
<body>
    <div class="container">
        <h2>Choose Signup Option</h2>

        <form action="signup.php" method="get">
            <input type="hidden" name="role" value="instructor">
            <button type="submit" class="btn btn-instructor">Signup as Instructor</button>
        </form>

        <form action="signup.php" method="get">
            <input type="hidden" name="role" value="student">
            <button type="submit" class="btn btn-student">Signup as Student</button>
        </form>
    </div>
</body>
</html>
