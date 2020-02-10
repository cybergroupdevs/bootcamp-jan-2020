using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;

namespace Practice
{
    public class retrieve
    {
        static SqlConnection con = connection.giveConnection();
        static StringBuilder sb = new StringBuilder();
        public static void getAll()
        {
            if (con != null)
            {
                con.Open();
                sb.Append("SELECT * FROM [dbo].[cSharpTask]");
                String sql = sb.ToString();
                SqlCommand command = new SqlCommand(sql, con);
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2));
                }
                con.Close();
            }
        }

        public static void getOne(int id)
        {
            if (con != null)
            {
                con.Open();
                sb.Append("SELECT * FROM [dbo].[cSharpTask] WHERE id = "+id);
                String sql = sb.ToString();
                SqlCommand command = new SqlCommand(sql, con);
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Console.WriteLine("{0} {1} {2}", reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2));
                }
                con.Close();

                Console.ReadLine();
            }
        }
    }
}
