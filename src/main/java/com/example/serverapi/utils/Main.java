package com.example.serverapi.utils;

import com.example.serverapi.database.dao.user_dao.UserDAO;
import com.example.serverapi.database.dao.user_dao.UserDAOImplementation;
import com.example.serverapi.model.User;

public class Main {

    public static void main(String[] args) {
        User u = new User(
                "shacklers",
                "agustin",
                "123456",
                "mail@mail.com",
                "false street 123",
                "112233");

        UserDAO dao = new UserDAOImplementation();
        dao.create(u);
    }
}
