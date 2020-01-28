using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace DotNetBasics
{
    public class Insert
    {
        public static void DoInsert()
        {
            Console.WriteLine("\n INSERT Example:\n");
            SqlConnection insertCon = Connection.doConnection();
            try
            {
                insertCon.Open();
                StringBuilder sbInsert = new StringBuilder();
                sbInsert.Append("INSERT INTO [dbo].[webTechnology] (ID, FileName, Path) Values (7, 'CSharp','CFolder') ");
                String sql = sbInsert.ToString();
                using (SqlCommand command = new SqlCommand(sql, insertCon))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            command.ExecuteNonQuery();
                            Console.WriteLine("inserted");
                        }
                        Console.ReadLine();
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }


        }
    }
}
