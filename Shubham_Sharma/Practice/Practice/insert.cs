using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Practice
{
    public class insert
    {
        public static void doInsert(int id, string name, int age)
        {
            SqlConnection con = connection.giveConnection();
            if(con != null)
            {
                try
                {
                    con.Open();
                    StringBuilder sb = new StringBuilder();
                    sb.Append($"INSERT INTO [dbo].[cSharpTask] (ID, Name, Age) VALUES({id},'{name}',{age})");
                    String sql = sb.ToString();
                    //Console.WriteLine(sql);
                    SqlCommand command = new SqlCommand(sql, con);
                    command.ExecuteNonQuery();
                    con.Close();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.ToString());
                }
            }
        }
    }
}
