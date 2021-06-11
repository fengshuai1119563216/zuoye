package com.fs.entity;

public class fs {
        public String username;
        public String password;

    public fs(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "fs{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
