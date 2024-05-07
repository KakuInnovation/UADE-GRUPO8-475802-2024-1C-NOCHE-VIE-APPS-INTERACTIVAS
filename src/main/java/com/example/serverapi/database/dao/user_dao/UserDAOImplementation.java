package com.example.serverapi.database.dao.user_dao;

import com.example.serverapi.database.util.HibernateUtil;
import com.example.serverapi.model.User;
import org.hibernate.Session;

import java.util.UUID;

public class UserDAOImplementation implements UserDAO {

    public User create(User user) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            session.beginTransaction();
            String id = (String) session.save(user);
            System.out.println(id);
            session.getTransaction().commit();
            user.setUseId(id);
        }
        catch(Error e){
            System.out.println(e);
        }
        finally {
            session.close();
            return user;
        }
    }

}
