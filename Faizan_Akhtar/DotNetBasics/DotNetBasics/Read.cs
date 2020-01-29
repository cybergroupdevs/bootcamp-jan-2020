using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace DotNetBasics
{
    public class Read
    {
        public static void DoRead()
        {
            Console.WriteLine("\n READ Example:\n");
            SqlConnection readCon = Connection.doConnection();
            
            try
            {
                readCon.Open();
                StringBuilder sb = new StringBuilder();
                sb.Append("SELECT [FileName],[Path] FROM [dbo].[webTechnology]");
                String sql = sb.ToString();
                using (SqlCommand command = new SqlCommand(sql, readCon))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                    
                        {
                            Console.WriteLine("{0} {1}", reader.GetString(0), reader.GetString(1));
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
