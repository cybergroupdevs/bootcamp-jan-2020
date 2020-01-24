using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Practice
{
    public class update
    {
        static SqlConnection con = connection.giveConnection();
        static StringBuilder sb = new StringBuilder();
        public static void updateName(int id, string name)
        {
            if(con != null)
            {
                con.Open();
                sb.Append("UPDATE [dbo].[cSharpTask] SET Name = '"+name+"' WHERE id = "+id);
                String sql = sb.ToString();
                SqlCommand command = new SqlCommand(sql, con);
                command.ExecuteNonQuery();
                con.Close();
            }
        }

        public static void updateAge(int id, int age)
        {
            if(con != null)
            {
                con.Open();
                sb.Append("UPDATE [dbo].[cSharpTask] SET AGE = " + age + " WHERE id = " + id);
                String sql = sb.ToString();
                SqlCommand command = new SqlCommand(sql, con);
                command.ExecuteNonQuery();
                con.Close();
            }
        }
    }
}
